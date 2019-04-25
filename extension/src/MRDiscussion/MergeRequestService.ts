import { MergeRequest } from './MergeRequest';
import { RemoteMergeRequest } from './RemoteMergeRequest';

export class MergeRequestService {
  constructor(private readonly remoteMergeRequest: RemoteMergeRequest) {}

  async getMergeRequestForBranch(branch: string): Promise<MergeRequest> {
    const payload = await this.remoteMergeRequest.load(branch);

    return MergeRequest.create(payload);
  }
}
