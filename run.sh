#!/bin/bash

CONTAINER_NAME="${3:-wdio-test-container}"
IMAGE_NAME=$1
OUTPUT_FILE="${2:-data.txt}"

# Start the container
docker run --name "$CONTAINER_NAME" --rm "$IMAGE_NAME" \
npm run wdio \
&

# Print column headers
echo "Timestamp Container_Name Container_ID CPU_Usage Memory_Usage Memory_Percent Net_IO Block_IO PIDs" > "$OUTPUT_FILE" 

# Start monitoring loop
while docker inspect --format '{{.State.Running}}' "$CONTAINER_NAME" &>/dev/null; do
  timestamp=$(date '+%F %T')

  # Use timeout to prevent hang
  STATS=$(timeout 0.9s docker stats --no-stream --format "{{.Name}} {{.ID}} {{.CPUPerc}} {{.MemUsage}} {{.MemPerc}} {{.NetIO}} {{.BlockIO}} {{.PIDs}}" 2>/dev/null | grep "$CONTAINER_NAME")

  if [ -n "$STATS" ]; then
    echo "$timestamp $STATS" >> "$OUTPUT_FILE"
  else
    echo "$timestamp ERROR timeout or no output" >> "$OUTPUT_FILE"
  fi
  
done
