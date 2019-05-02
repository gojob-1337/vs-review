import Axios, { AxiosInstance } from 'axios';

export class GitlabMergeRequest {
  constructor(private readonly gitlabAxiosInstance: AxiosInstance) {}

  load(branch: string) {
    return this.gitlabAxiosInstance
      .get(`/projects/api/merge_requests?source_branch=${branch}`)
      .catch(console.error)
      .then(res => res && res.data);
  }
}
