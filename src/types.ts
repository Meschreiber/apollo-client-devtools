import type { ApolloQueryResult } from "@apollo/client";

export type QueryResult = ApolloQueryResult<any>;

export interface ExplorerResponse {
  operationName: string | undefined;
  response: QueryResult;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type NoInfer<T> = [T][T extends any ? 0 : never];

// Alias `any` in places that we are safe to use it (like an constraint) without
// the need to disable eslint rules.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SafeAny = any;
