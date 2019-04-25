import { MergeRequest } from './MergeRequest';

describe('MergeRequest', () => {
  describe('creation', () => {
    const singleNoteDiscussion = {
      id: 'b2556e866f7d827f40d8e54da6b2daaafcf408bb',
      individual_note: true,
      notes: [
        {
          id: 159498836,
          type: null,
          body:
            'added 7 commits\n\n<ul><li>627f961d...22ea759a - 5 commits from branch <code>master</code></li><li>9a21cc76 - feat(feature-flipping): Add a middleware that throw 404 for route depending on a list of flags</li><li>472b3781 - feat(feature-flipping): Add feature-flipping module with a *GET*  to return all flags</li></ul>\n\n[Compare with previous version](https://gitlab.com/gojob/api/merge_requests/900/diffs?diff_id=39043529&start_sha=627f961d2dbc56a5c52d6b5d05c3a74cc548c9a7)',
          attachment: null,
          author: {
            id: 2114165,
            name: 'Simon LE CLERC',
            username: 'SimonGoJob',
            state: 'active',
            avatar_url: 'https://secure.gravatar.com/avatar/7d3fb9bff5c6332d73f34c02fbab61a6?s=80&d=identicon',
            web_url: 'https://gitlab.com/SimonGoJob',
          },
          created_at: '2019-04-10T16:45:01.313Z',
          updated_at: '2019-04-10T16:45:01.313Z',
          system: true,
          noteable_id: 27417147,
          noteable_type: 'MergeRequest',
          resolvable: false,
          noteable_iid: 900,
        },
      ],
    };

    const multipleNoteDiscussion = {
      id: '89d487e7367df85e4b577983d42c134000337dec',
      individual_note: false,
      notes: [
        {
          id: 159677764,
          type: 'DiffNote',
          body:
            '@matthieuproucelle is this the part your were talking about? (that could have been moved to a service or any dedicated component/entity/injectable/whatevername)',
          attachment: null,
          author: {
            id: 2029953,
            name: 'Vincent G',
            username: 'VinceOPS',
            state: 'active',
            avatar_url: 'https://assets.gitlab-static.net/uploads/-/system/user/avatar/2029953/avatar.png',
            web_url: 'https://gitlab.com/VinceOPS',
          },
          created_at: '2019-04-11T08:20:32.972Z',
          updated_at: '2019-04-11T08:20:32.972Z',
          system: false,
          noteable_id: 27417147,
          noteable_type: 'MergeRequest',
          position: {
            base_sha: '22ea759ab09b59553c2615e689661f3da85c7252',
            start_sha: '22ea759ab09b59553c2615e689661f3da85c7252',
            head_sha: '472b3781420bffb08caffc75b4c4aaa265d6c80f',
            old_path: 'src/fog/modules/feature-flipping/feature-flipping-fog.controller.ts',
            new_path: 'src/fog/modules/feature-flipping/feature-flipping-fog.controller.ts',
            position_type: 'text',
            old_line: null,
            new_line: 19,
          },
          resolvable: true,
          resolved: false,
          resolved_by: null,
          noteable_iid: 900,
        },
        {
          id: 159692467,
          type: 'DiffNote',
          body:
            '@VinceOPS the service or whatever he was talking was about another part of the feature flipping. It was in the case where we want to flip a small part of logic that is present in a controller.',
          attachment: null,
          author: {
            id: 2114165,
            name: 'Simon LE CLERC',
            username: 'SimonGoJob',
            state: 'active',
            avatar_url: 'https://secure.gravatar.com/avatar/7d3fb9bff5c6332d73f34c02fbab61a6?s=80&d=identicon',
            web_url: 'https://gitlab.com/SimonGoJob',
          },
          created_at: '2019-04-11T08:55:24.029Z',
          updated_at: '2019-04-11T08:55:24.029Z',
          system: false,
          noteable_id: 27417147,
          noteable_type: 'MergeRequest',
          position: {
            base_sha: '22ea759ab09b59553c2615e689661f3da85c7252',
            start_sha: '22ea759ab09b59553c2615e689661f3da85c7252',
            head_sha: '472b3781420bffb08caffc75b4c4aaa265d6c80f',
            old_path: 'src/fog/modules/feature-flipping/feature-flipping-fog.controller.ts',
            new_path: 'src/fog/modules/feature-flipping/feature-flipping-fog.controller.ts',
            position_type: 'text',
            old_line: null,
            new_line: 19,
          },
          resolvable: true,
          resolved: false,
          resolved_by: null,
          noteable_iid: 900,
        },
      ],
    };

    const payload = [singleNoteDiscussion, multipleNoteDiscussion];

    it('should construct and return a merge request for a given payload', async () => {
      const mergeRequest = MergeRequest.create(payload);

      expect(mergeRequest).toBeInstanceOf(MergeRequest);
      expect(mergeRequest.discussions.length).toEqual(2);
      expect(mergeRequest.discussions[1].id).toEqual(multipleNoteDiscussion.id);

      expect(mergeRequest.discussions[1].messages.length).toEqual(2);
      expect(mergeRequest.discussions[1].messages[0].id).toEqual(multipleNoteDiscussion.notes[0].id);
      expect(mergeRequest.discussions[1].messages[0].author).toEqual(multipleNoteDiscussion.notes[0].author.name);
      expect(mergeRequest.discussions[1].messages[0].content).toEqual(multipleNoteDiscussion.notes[0].body);
    });
  });
});
