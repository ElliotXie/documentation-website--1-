---
title: Setting Up CASSIA
---

First, ensure you have the reticulate package and the devtools package installed.

\`\`\`r
install.packages("reticulate")
install.packages("devtools")
\`\`\`

Next, you can install the CASSIA package from github:

\`\`\`r
# Install the CASSIA package
library(devtools)
devtools::install_github("ElliotXie/CASSIA/CASSIA_R")
\`\`\`

## Setting Up the Python Environment

CASSIA relies on Python for some of its backend processing. When you load the CASSIA package, it attempts to set up the required Python environment automatically. However, if you encounter issues, you can use the `setup_cassia_env()` function to create and configure the necessary Python environment automatically.

\`\`\`r
library(CASSIA)

# Automatically set up the Python environment if needed
setup_cassia_env()
\`\`\`

This function will:

- Create a new Conda environment named `cassia_env` if it doesn't already exist.
- Install the required Python packages: `openai`, `pandas`, `numpy`, `scikit-learn`, `requests`, and `anthropic`.

## Setting API Keys


To use LLMs like OpenAI's GPT-4, Anthropic's Claude, or models via OpenRouter, you will first need to get your API keys from the provider and then set your API keys using the `setLLMApiKey()` function. Normally it will take about 3 minutes to get the API key from the provider.

**Note: You must set at least one API key to use CASSIA.**

\`\`\`r
# For OpenAI
setLLMApiKey("your_openai_api_key", provider = "openai", persist = TRUE)

# For Anthropic
setLLMApiKey("your_anthropic_api_key", provider = "anthropic", persist = TRUE)

# For OpenRouter
setLLMApiKey("your_openrouter_api_key", provider = "openrouter", persist = TRUE)
\`\`\`

- Replace `"your_api_key"` with your actual API key.
- Set `provider` to `"openai"`, `"anthropic"`, or `"openrouter"` depending on your provider. (Openrouter is recommended for accessing free open source models)
- Setting `persist = TRUE` saves the key in your `.Renviron` file for future sessions.



## How to Select Models and Providers

There are three providers to choose from: `openai`, `anthropic`, and `openrouter`. Each provider has its own models and pricing.
**Note that the model name must be set exactly as shown below or the model will not be found.**

### OpenAI

- `gpt-4o`

`gpt-4o` is the most balanced model. We use it as the default while benchmarking CASSIA's performance with GPTcelltype.

### Anthropic

- `claude-3-5-sonnet-20241022`

`claude-3-5-sonnet-20241022` is the most powerful model. In the benchmark, we use it for scoring and annotation boost agent.

### OpenRouter

OpenRouter is a platform that offers access to almost all the models supported by major providers. It is recommended to use OpenRouter to access claude-3-5-sonnet too, since it has the highest rate limit. And you can also use it to access a number of open source models such as llama-3.2 and DeepseekV3. These open source models are much cheaper with a slight performance decrease.

- `anthropic/claude-3.5-sonnet`
- `openai/gpt-4o-2024-11-20`
- `meta-llama/llama-3.2-90b-vision-instruct` 
- `deepseek/deepseek-chat-v3-0324`(most recommended model,performance is almost the same as gpt4o)
- `deepseek/deepseek-chat-v3-0324:free`(free version of DeepseekV3,slightly slower and less stable)

DeepseekV3 is the most recommended model. It is a free and open source model that is almost as good as gpt4o.
