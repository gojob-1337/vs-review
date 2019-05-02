import { AxiosInstance } from 'axios';

import { GitlabMergeRequest } from './GitlabMergeRequest';

describe('GitlabMergeRequest', () => {
  let gitlabMergeRequest: GitlabMergeRequest;
  let createSpy: any;
  let gitlabAxiosInstance: AxiosInstance;
  const gitlabResponse = { data: {} };

  beforeAll(() => {
    gitlabAxiosInstance = { get: jest.fn().mockResolvedValue(gitlabResponse) } as any;
    gitlabMergeRequest = new GitlabMergeRequest(gitlabAxiosInstance);
  });

  it('should load the merge request from a branch', async () => {
    const branch = 'branch';
    const result = await gitlabMergeRequest.load(branch);

    expect(result).toEqual(gitlabResponse.data);
    expect(gitlabAxiosInstance.get).toHaveBeenCalledWith('/projects/api/merge_requests?source_branch=' + branch);
  });
});
