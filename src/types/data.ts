// Based on dq_dimensions.json
export interface DQDimension {
  id: number;
  damaId: string;
  name: string;
  definition: string;
  category: string; // "Data Values", "Records", "Data Sets", "Data Systems", "Data Governance"
  subCategory?: string;
  unitOfMeasure: string;
  exampleGood: string;
  examplePoor: string;
  tags?: string[];
  relatedDimensions?: string[]; // array of damaIds
}

// Based on document_info.json
export interface DocumentInfo {
  title: string;
  version: string;
  date: string;
  source: string;
  description?: string;
}

// Based on core_definitions.json
export interface CoreDefinition {
  term: string;
  definition: string;
  category: string; // e.g., "Data Quality", "Data Governance"
}

// Based on units_of_measure.json
export interface UnitOfMeasure {
  unit: string;
  description: string;
  examples?: string[];
}

// Based on data_categories_map.json
export interface DataCategoryMap {
  categoryName: string;
  framework?: string; // e.g., "DAMA DMBOK", "ISO 8000"
  description?: string;
  dimensionDamaIds: string[]; // array of damaIds
}

// Based on selection_steps.json
export interface SelectionStep {
  stepNumber: number;
  stepName: string;
  description: string;
  inputs?: string[];
  outputs?: string[];
  considerations?: string[];
}

// Based on business_objectives.json
export interface BusinessObjective {
  id: string; // e.g., "BO_001"
  name: string;
  description: string;
  category?: string; // e.g., "Financial", "Operational", "Strategic"
}

// Based on glossary_concepts.json
export interface GlossaryConcept {
  id: string; // e.g., "GC_001"
  concept: string;
  definition: string;
  category?: string;
  relatedConcepts?: string[]; // array of concept IDs
  synonyms?: string[];
}

// Based on dq_business_impacts.json
export interface DQBusinessImpact {
  damaId: string;
  impactArea: string; // e.g., "Operational Efficiency", "Financial Reporting", "Customer Satisfaction"
  negativeImpactsPoorDQ: string[];
  positiveImpactsGoodDQ: string[];
  illustrativeKPIs?: string[];
  severity?: 'High' | 'Medium' | 'Low';
}

// Based on dq_strategic_alignment.json
export interface DQStrategicAlignment {
  strategicObjectiveId: string; // links to BusinessObjective.id
  strategicObjectiveName: string; // denormalized for convenience
  criticalDimensionDamaIds: string[];
  supportingDimensionDamaIds?: string[];
  rationale?: string;
}

// Based on dq_ai_readiness_factors.json
export interface DQAiReadinessFactor {
  aiFactorId: string; // e.g., "AI_RF_001"
  aiUseCaseOrRequirement: string;
  description?: string;
  criticalDimensionDamaIds: string[];
  supportingDimensionDamaIds?: string[];
  implicationsOfPoorDQ?: string[];
}

// Based on business_lifecycles_master.json
export interface BusinessLifecycleStage {
  stageId: string; // e.g., "O2C_S01"
  stageName: string;
  description: string;
  typicalPainPoints?: string[];
  keyDataEntities?: string[];
}

export interface BusinessLifecycle {
  lifecycleId: string; // e.g., "LC_O2C"
  lifecycleName: string;
  description: string;
  stages: BusinessLifecycleStage[];
}

// Based on dq_business_lifecycle_impacts.json
export interface DQBusinessLifecycleImpact {
  lifecycleId: string;
  stageId: string;
  painPoint: string; // Specific pain point text
  criticalDimensionDamaIds: string[];
  impactDescription: string; // "Why it matters for this stage/pain point"
  potentialConsequences?: string[];
}

// Based on dq_kpi_okr_dependencies.json
export interface DQKpiOkrDependency {
  metricId: string; // e.g., "KPI_001"
  metricName: string;
  metricType: 'KPI' | 'OKR';
  description?: string;
  objectiveOrArea?: string;
  dependentDimensionDamaIds: string[];
  exampleImpactOfPoorDQ?: string;
  dataSources?: string[];
}

// Based on dq_environmental_factors.json
export interface DQEnvironmentalFactor {
  factorId: string; // e.g., "ENV_001"
  factorName: string;
  description: string;
  category: string; // e.g., "People", "Process", "Technology", "Culture"
  dqDimensionsImpactedDamaIds: string[];
  potentialSymptoms?: string[];
  mitigationStrategies?: string[];
}

// Based on project_charter_templates.json
export interface CharterTemplateSection {
  sectionTitle: string;
  copyTemplate: string; // Text with placeholders like {PlaceholderName}
  guidanceForUser?: string;
  placeholders?: Array<{ name: string; description: string; example?: string }>;
}
export interface ProjectCharterTemplate {
  charterType: 'LifecyclePainPoint' | 'KPIImprovement' | 'StrategicOrAIInitiative' | 'GenericDQ';
  templateName: string;
  description: string;
  defaultProjectTitleTemplate: string; // e.g., "DQ Improvement for {LifecycleName} - {StageName}"
  sections: CharterTemplateSection[];
}

// Conceptual User Context (built during diagnostic journeys)
export interface ConceptualUserContext {
  journeyType: 'LifecyclePainPoint' | 'KPIImprovement' | 'StrategicOrAIInitiative' | 'ExploreDimensions';
  selectedLifecycleId?: string;
  selectedLifecycleName?: string;
  selectedStageId?: string;
  selectedStageName?: string;
  selectedPainPoints?: string[];
  selectedKPIId?: string;
  selectedKPIName?: string;
  selectedStrategicObjectiveId?: string;
  selectedStrategicObjectiveName?: string;
  selectedAIFactorId?: string;
  selectedAIFactorName?: string;
  identifiedDamaIds: string[]; // Key DQ dimensions diagnosed
  environmentalFactors?: Array<{ factorId: string; factorName: string }>;
  // Potentially add more fields as needed for charter generation
  charterInputs?: Record<string, any>; // For specific charter placeholder values
}
