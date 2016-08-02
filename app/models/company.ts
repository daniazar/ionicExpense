import ACL from './acl'

export default class Company {
  id: number;
  title: string;
  owner: string;
  ACL: [ACL];
  created_at: string;
  updated_at: string;
}