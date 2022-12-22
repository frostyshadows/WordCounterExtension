export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName: string
          query: string
          variables: Json
          extensions: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      Entry: {
        Row: {
          user_uuid: string
          project_uuid: string | null
          timestamp: string
          count: number
          note: string | null
        }
        Insert: {
          user_uuid: string
          project_uuid?: string | null
          timestamp?: string
          count?: number
          note?: string | null
        }
        Update: {
          user_uuid?: string
          project_uuid?: string | null
          timestamp?: string
          count?: number
          note?: string | null
        }
      }
      Project: {
        Row: {
          uuid: string
          created_at: string | null
          title: string
          description: string | null
          goal_count: number | null
          goal_period: string | null
          goal_total: number | null
          status: string
          start_time: string | null
          end_time: string | null
          user_id: string
        }
        Insert: {
          uuid: string
          created_at?: string | null
          title?: string
          description?: string | null
          goal_count?: number | null
          goal_period?: string | null
          goal_total?: number | null
          status?: string
          start_time?: string | null
          end_time?: string | null
          user_id: string
        }
        Update: {
          uuid?: string
          created_at?: string | null
          title?: string
          description?: string | null
          goal_count?: number | null
          goal_period?: string | null
          goal_total?: number | null
          status?: string
          start_time?: string | null
          end_time?: string | null
          user_id?: string
        }
      }
      User: {
        Row: {
          uuid: string
          created_at: string
          goal_count: number | null
          goal_period: string | null
        }
        Insert: {
          uuid: string
          created_at?: string
          goal_count?: number | null
          goal_period?: string | null
        }
        Update: {
          uuid?: string
          created_at?: string
          goal_count?: number | null
          goal_period?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          id: string
          name: string
          owner: string | null
          created_at: string | null
          updated_at: string | null
          public: boolean | null
        }
        Insert: {
          id: string
          name: string
          owner?: string | null
          created_at?: string | null
          updated_at?: string | null
          public?: boolean | null
        }
        Update: {
          id?: string
          name?: string
          owner?: string | null
          created_at?: string | null
          updated_at?: string | null
          public?: boolean | null
        }
      }
      migrations: {
        Row: {
          id: number
          name: string
          hash: string
          executed_at: string | null
        }
        Insert: {
          id: number
          name: string
          hash: string
          executed_at?: string | null
        }
        Update: {
          id?: number
          name?: string
          hash?: string
          executed_at?: string | null
        }
      }
      objects: {
        Row: {
          id: string
          bucket_id: string | null
          name: string | null
          owner: string | null
          created_at: string | null
          updated_at: string | null
          last_accessed_at: string | null
          metadata: Json | null
          path_tokens: string[] | null
        }
        Insert: {
          id?: string
          bucket_id?: string | null
          name?: string | null
          owner?: string | null
          created_at?: string | null
          updated_at?: string | null
          last_accessed_at?: string | null
          metadata?: Json | null
          path_tokens?: string[] | null
        }
        Update: {
          id?: string
          bucket_id?: string | null
          name?: string | null
          owner?: string | null
          created_at?: string | null
          updated_at?: string | null
          last_accessed_at?: string | null
          metadata?: Json | null
          path_tokens?: string[] | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      extension: {
        Args: { name: string }
        Returns: string
      }
      filename: {
        Args: { name: string }
        Returns: string
      }
      foldername: {
        Args: { name: string }
        Returns: string[]
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: { size: number; bucket_id: string }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits: number
          levels: number
          offsets: number
          search: string
          sortcolumn: string
          sortorder: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
  }
}
