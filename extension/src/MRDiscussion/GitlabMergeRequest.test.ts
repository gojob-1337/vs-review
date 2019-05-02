import Axios from 'axios';

import { GitlabMergeRequest } from './GitlabMergeRequest';

describe('GitlabMergeRequest', () => {
  let gitlabMergeRequest: GitlabMergeRequest;
  let createSpy: any;
  const gitlabResponse = { data: {} };

  beforeAll(() => {
    createSpy = jest.spyOn(Axios, 'create').mockReturnValue({ get: jest.fn().mockResolvedValue(gitlabResponse) } as any);

    gitlabMergeRequest = new GitlabMergeRequest();
  });

  it('should load the merge request from a branch', async () => {
    const branch = 'branch';
    const result = await gitlabMergeRequest.load(branch);

    expect(result).toEqual(gitlabResponse.data);
    expect(createSpy.get).toHaveBeenCalledWith('https://gitlab.com/api/v4/projects/api/merge_requests?source_branch=' + branch);
  });
});
