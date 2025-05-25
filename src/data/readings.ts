export interface Reading {
  date: string; // Format: YY-MM-DD to match existing date format
  title: string;
  url: string;
  description?: string; // Optional short description
}

export const readings: Reading[] = [
  { 
    date: '25-05-25', 
    title: 'Dynamic Parallel Tree Search for Efficient LLM Reasoning', 
    url: 'https://arxiv.org/abs/2502.16235',
    description: 'nice parallel tree search'
  },
  { 
    date: '25-05-25', 
    title: 'Mutual Reasoning Makes Smaller LLMs Stronger Problem-Solvers', 
    url: 'https://arxiv.org/abs/2408.06195',
    description: 'making small LLMs big'
  },
  { 
    date: '25-05-24', 
    title: 'Harnessing the Universal Geometry of Embeddings', 
    url: 'https://arxiv.org/abs/2505.12540',
  },
  { 
    date: '25-05-22', 
    title: 'Artificial Curiosity & Creativity Since 1990-91', 
    url: 'https://people.idsia.ch/~juergen/artificial-curiosity-since-1990.html'
  },
  { 
    date: '25-05-20', 
    title: 'Flow Matching: Guide and Code', 
    url: 'https://ai.meta.com/research/publications/flow-matching-guide-and-code/',
  },
  { 
    date: '25-05-17', 
    title: 'Embeddings are underrated', 
    url: 'https://technicalwriting.dev/ml/embeddings/overview.html'
  },
] as const;

// Get recent readings (last 5)
export const getRecentReadings = (count: number = 5) => readings.slice(0, count);

// Get all readings
export const getAllReadings = () => readings;