import ACL from './acl'


export default class User {
  id: number;
  name: string;
  ACL: [ACL];
  created_at: string;
  lastLogin: string;
}