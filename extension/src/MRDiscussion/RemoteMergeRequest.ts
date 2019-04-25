export interface RemoteMergeRequest {
  load(branch: string): Promise<any>;
}
