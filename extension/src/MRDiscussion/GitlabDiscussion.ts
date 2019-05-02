interface GitlabAuthor {
  id: number;
  name: string;
  username: string;
  state: string;
  avatar_url: string;
  web_url: string;
}

interface GitlabPosition {
  base_sha: string;
  start_sha: string;
  head_sha: string;
  old_path: string;
  new_path: string;
  position_type: string;
  old_line?: any;
  new_line: number;
}

interface GitlabNote {
  id: number;
  type: string | null;
  body: string;
  attachment?: any;
  author: GitlabAuthor;
  created_at: string;
  updated_at: string;
  system: boolean;
  noteable_id: number;
  noteable_type: string;
  resolvable: boolean;
  noteable_iid: number;
  position?: GitlabPosition;
  resolved?: boolean;
  resolved_by?: any;
}

export interface GitlabDiscussion {
  id: string;
  individual_note: boolean;
  notes: GitlabNote[];
}
