---
title: Single Cluster Analysis
---

The runCASSIA function analyzes a single cluster of marker genes to identify the cell type. Keep in mind that CASSIA is designed to handle multiple clusters at once, so this serves as a quick method for analyzing a single cluster.

### Example

If you're using OpenRouter as your provider, you can specify models like `"openai/gpt-4o-2024-11-20"` or `"anthropic/claude-3.5-sonnet"`. Here are some model recommendations:

- **Claude 3.5 Sonnet** (Best performance, slightly more expensive)
    - Model ID: `"anthropic/claude-3.5-sonnet"`
- **GPT-4o** (Balanced option)
    - Model ID: `"openai/gpt-4o-2024-11-20"`
- **Llama 3.2** (Open source, cost-effective)
    - Model ID: `"meta-llama/llama-3.2-90b-vision-instruct"`
- **Deepseek v3** (Open source, almost free, and performance on par with gpt4o, most recommended option)
    - Model ID: `"deepseek/deepseek-chat-v3-0324"`
    - Model ID: `"deepseek/deepseek-chat-v3-0324:free"`

#### Example Code

```R
# Parameters
model <- "openai/gpt-4o-2024-11-20"  # Model ID when using OpenRouter
temperature <- 0
marker_list <- c("CD3D", "CD3E", "CD2", "TRAC")
tissue <- "blood"
species <- "human"
additional_info <- NULL
provider <- "openrouter"  # or "openai", "anthropic"

# Run the analysis
result <- runCASSIA(
  model = model,
  temperature = temperature,
  marker_list = marker_list,
  tissue = tissue,
  species = species,
  additional_info = additional_info,
  provider = provider
)

# View structured output
print(result$structured_output)

# View conversation history
print(result$conversation_history)
```

_Note:_ When using OpenRouter, specify the complete model ID.
