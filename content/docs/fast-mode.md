---
title: Fast Mode
---

CASSIA's Fast Mode offers a streamlined, one-line solution for running the complete analysis pipeline. This mode combines annotation, scoring, and annotation boost in a single function call, using optimized default parameters.

### Basic Usage
```R
runCASSIA_pipeline(
    output_file_name = "my_analysis",
    tissue = "brain",
    species = "human",
    marker = marker_data,
    max_workers = 4
)
```


### Add CASSIA results back to the seurat object
```R
seurat_corrected <- add_cassia_to_seurat(
  seurat_obj = seurat_corrected, # The seurat object you want to add the CASSIA results to
  cassia_results_path = "/FastAnalysisResults_scored.csv", #where the scored results saved, specify the path
  cluster_col = "celltype", # Column in Seurat object with cell types
  cassia_cluster_col="True Cell Type" # Column in the scored results with the true cell types
)

# This will add six new columns to the seurat object:the genearl celltype, all three subcelltypes, the mostly likely celltype, the second likely celltype, the third likely celltype, and mixed celltype,and the quality score of each cell type.
```




### Full Parameter Options
```R
runCASSIA_pipeline(
    # Required parameters
    output_file_name,     # Base name for output files
    tissue,               # Tissue type (e.g., "brain", "blood")
    species,              # Species (e.g., "human", "mouse")
    marker,               # Marker file from findallmarker, path or the data obejct
    
    # Optional parameters with defaults
    max_workers = 4,      # Number of parallel workers
    
    # Model configurations
    annotation_model = "gpt-4o",             # Model for annotation
    annotation_provider = "openai",         # Provider for annotation
    score_model = "anthropic/claude-3.5-sonnet",  # Model for scoring
    score_provider = "openrouter",         # Provider for scoring
    annotationboost_model="anthropic/claude-3.5-sonnet", #Model for annotation boost
    annotationboost_provider="openrouter", #Provider for annotation boost
    
    # Analysis parameters
    score_threshold = 75,     # Minimum acceptable score
    additional_info = NULL    # Additional context information
)
```


### Output Files
The pipeline generates:
1. Initial annotation results
2. Quality scores and reasoning
3. Summary report
4. Annotation boost report

### Performance Tips
- For optimal performance, adjust `max_workers` based on your system's CPU cores
- Use `additional_info` to provide relevant experimental context
- Monitor `score_threshold` to balance stringency with throughput



Next we introduce each function in detail...
