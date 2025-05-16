import {
  DQDimension,
  BusinessLifecycle,
  // Import other types as needed
} from '@/types/data';

const DATA_BASE_PATH = '/data'; // Path relative to the public folder

/**
 * Fetches and parses a JSON file from the public/data directory.
 * @param filePath Path to the JSON file (e.g., 'dq_dimensions.json')
 * @returns Promise<T> Parsed JSON data
 * @throws Error if fetching or parsing fails
 */
async function fetchData<T>(filePath: string): Promise<T> {
  try {
    const response = await fetch(`${DATA_BASE_PATH}/${filePath}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${filePath}: ${response.statusText}`);
    }
    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error(`Error loading data from ${filePath}:`, error);
    throw error; // Re-throw to allow calling function to handle
  }
}

/**
 * Fetches all DQ Dimensions.
 * @returns Promise<DQDimension[]>
 */
export async function getAllDQDimensions(): Promise<DQDimension[]> {
  return fetchData<DQDimension[]>('dq_dimensions.json');
}

/**
 * Fetches a DQ Dimension by its DAMA ID.
 * @param damaId The DAMA ID of the dimension.
 * @returns Promise<DQDimension | undefined>
 */
export async function getDQDimensionByDamaId(damaId: string): Promise<DQDimension | undefined> {
  const dimensions = await getAllDQDimensions();
  return dimensions.find(dim => dim.damaId === damaId);
}

/**
 * Fetches all Business Lifecycles.
 * @returns Promise<BusinessLifecycle[]>
 */
export async function getAllBusinessLifecycles(): Promise<BusinessLifecycle[]> {
  return fetchData<BusinessLifecycle[]>('business_lifecycles_master.json');
}

/**
 * Fetches a Business Lifecycle by its ID.
 * @param lifecycleId The ID of the lifecycle.
 * @returns Promise<BusinessLifecycle | undefined>
 */
export async function getBusinessLifecycleById(lifecycleId: string): Promise<BusinessLifecycle | undefined> {
  const lifecycles = await getAllBusinessLifecycles();
  return lifecycles.find(lc => lc.lifecycleId === lifecycleId);
}

// Add more functions here as needed for other data files and specific queries, e.g.:
// - getImpactsForDimension(damaId: string)
// - getDimensionsForLifecycleStage(lifecycleId: string, stageId: string, painPointsArray: string[])
// - getDimensionsForKPI(metricId: string)
// - populateCharterTemplate(templateType: string, userContext: ConceptualUserContext)
// ... and so on, based on DATA_MODEL_AND_CORE_LOGIC.md

// Example of a more complex data retrieval function (conceptual)
/*
export async function getContextsForDimension(damaId: string): Promise<any> {
  // This function would involve fetching multiple JSON files and
  // performing the "reverse lookups" described in DATA_MODEL_AND_CORE_LOGIC.md (section 2.7.2)
  // For example:
  // const lifecycleImpacts = await fetchData<DQBusinessLifecycleImpact[]>('dq_business_lifecycle_impacts.json');
  // const kpiDependencies = await fetchData<DQKpiOkrDependency[]>('dq_kpi_okr_dependencies.json');
  // ... and then filter these arrays based on the provided damaId.
  // Return a structured object with all contexts.
  console.log('Fetching contexts for dimension:', damaId);
  return {
    lifecycleContexts: [], // Populate with actual data
    kpiContexts: [],       // Populate with actual data
    // ... other contexts
  };
}
*/

console.log('Data service initialized. Base path:', DATA_BASE_PATH);
