declare interface Env {
  NG_APP_SUPABASE_ANON_KEY: string;
  NG_APP_SUPABASE_URL: string;
}

declare interface ImportMeta {
  readonly env: Env;
}