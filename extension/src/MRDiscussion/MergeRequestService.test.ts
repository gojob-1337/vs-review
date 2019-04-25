import { MergeRequest } from './MergeRequest';
import { MergeRequestService } from './MergeRequestService';
import { RemoteMergeRequest } from './RemoteMergeRequest';

describe('MergeRequestService', () => {
  const remoteMergeRequest: RemoteMergeRequest = { load: jest.fn() };

  const mergeRequestService = new MergeRequestService(remoteMergeRequest);

  describe('getMergeRequestForBranch', () => {
    const mergeRequest = new MergeRequest();
    const branch = 'branch';
    const json = 'json';

    it('should construct and return a merge request for a given branch', async () => {
      remoteMergeRequest.load = jest.fn().mockResolvedValue(json);
      MergeRequest.create = jest.fn().mockReturnValue(mergeRequest);

      const result = await mergeRequestService.getMergeRequestForBranch(branch);

      expect(remoteMergeRequest.load).toHaveBeenCalledWith(branch);
      expect(MergeRequest.create).toHaveBeenCalledWith(json);

      expect(result).toBe(mergeRequest);
    });
  });
});
