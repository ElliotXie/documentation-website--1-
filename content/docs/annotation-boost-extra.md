---
title: Annotation Boost Extra (Optional)
---

This Agent is an extended version of the annotation boost agent. It performs extra analysis on a specific cluster with a custom analytical task. This function extends basic annotation by allowing focused investigation of cluster-specific biological questions using large language models.

## Usage
```r
runCASSIA_annottaionboost_additional_task(
    full_result_path,
    marker,
    output_name,
    cluster_name,
    major_cluster_info,
    num_iterations = 5,
    model = "anthropic/claude-3.5-sonnet",
    additional_task
)
```

## Arguments
* `full_result_path`: Character string. Path to the full results CSV file from previous analysis. Should include the output name with "_full.csv" suffix.

* `marker`: Object containing unprocessed marker data used in the analysis.

* `output_name`: Character string. Name for the output files generated by this function.

* `cluster_name`: Character string. Name of the specific cluster to analyze (e.g., "cd8-positive, alpha-beta t cell").

* `major_cluster_info`: Character string. General information about the tissue or system being studied (e.g., "Human Large Intestine").

* `num_iterations`: Integer. Number of iterations to run the analysis. Default is 5.

* `model`: Character string. Specifies the large language model to use. Currently only supports "anthropic/claude-3.5-sonnet".

* `additional_task`: Character string. Custom analytical task to perform on the cluster (e.g., "infer the state of this T cell cluster").

## Details
This function enhances cluster annotation by performing specialized analysis tasks using large language models. It's particularly useful for investigating specific biological questions about individual clusters. The function integrates marker data with custom analytical objectives to provide deeper insights into cluster characteristics.

## Note
The performance of this analytical approach has not been extensively benchmarked. Results should be interpreted with caution and validated through additional methods.

## Examples
```r
runCASSIA_annottaionboost_additional_task(
    full_result_path = "output_name_full.csv",
    marker = markers_unprocessed,
    output_name = "T_cell_state",
    cluster_name = "cd8-positive, alpha-beta t cell",
    major_cluster_info = "Human Large Intestine",
    num_iterations = 5,
    model = "anthropic/claude-3.5-sonnet",
    additional_task = "infer the state of this T cell cluster"
)
```
