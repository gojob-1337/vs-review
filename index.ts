import Axios from 'axios';
import { inspect } from 'util';

const instance = Axios.create({
  baseURL: 'https://gitlab.com/api/v4',
  headers: { 'PRIVATE-TOKEN': 'sEYanNr1Mtn7C_iC2GGz' },
});

const c = console;

function log(data: any) {
  c.log(inspect(data, false, 5, true));
}

(async () => {
  const p = await triggerPipeline();

  log(p);
})();

function triggerPipeline() {
  return instance
    .post('/projects/10805029/pipeline', {}, { params: { ref: 'master' } })
    .catch(console.error)
    .then(res => res && res.data);
}

function isMatchingOrigin(origin: string) {
  return project => {
    return project.ssh_url_to_repo === origin || project.http_url_to_repo === origin;
  };
}

function getMergeRequestsFromBranch(projectId: string, branch: string) {
  return instance
    .get(`/projects/${projectId}/merge_requests?source_branch=${branch}`)
    .catch(console.error)
    .then(res => res && res.data);
}

function getProjectsOfUser() {
  return instance
    .get('/projects', { params: { membership: true } })
    .catch(console.error)
    .then(res => res && res.data);
}

function getBranchesOfProject(projectId: string) {
  return instance
    .get(`/projects/${projectId}/repository/branches`)
    .catch(console.error)
    .then(res => res && res.data);
}

function getDiscussionsOfMergeRequest(projectId: string, mrIid: string) {
  return instance
    .get(`/projects/${projectId}/merge_requests/${mrIid}/discussions`)
    .catch(console.error)
    .then(res => res && res.data);
}

// const proj = gitlab.Projects(10).get();

// proj.access_requests.get();

// function Projects(id: string) {
//   return {
//     access_requests
//   };
// }
