import Axios from 'axios';
import { inspect } from 'util';

const instance = Axios.create({
  baseURL: 'https://gitlab.com/api/v4',
  headers: { 'PRIVATE-TOKEN': 'sEYanNr1Mtn7C_iC2GGz' },
});

export class GitlabMergeRequest {
  load(branch: string) {
    return instance
      .get(`/projects/api/merge_requests?source_branch=${branch}`)
      .catch(console.error)
      .then(res => res && res.data);
  }
}
