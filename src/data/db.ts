import Dexie, { type EntityTable } from 'dexie';

interface Nodes {
  id: number;
  time: string;
  header: string;
  body: string;
}

const db = new Dexie('NodeDatabase') as Dexie & {
  notes: EntityTable<
    Nodes,
    'id' 
  >;
};

// Schema declaration:
db.version(1).stores({
  notes: '++id, time, header, body'
});

export type { Nodes };
export { db };