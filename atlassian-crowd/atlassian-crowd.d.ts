declare module "atlasian-crowd" {
  namespace AtlassianCrowd {
    interface IOptions {
      application: {
        name: string;
        password: string;
      };
      crowd: {
        base: string;
      };
      port?: number | string;
    }
  }

  export class AtlassianCrowd {
    constructor(options: AtlassianCrowd.IOptions);
    ping(callback: Function): void;
    search(type: string, query: string, callback: Function): void;
    user: {
      active(username: string, callback: Function): void;
      authenticate(username: string, password: string, callback: Function): void;
      changepassword(username: string, password: string, callback: Function): void;
      create(firstname: string, lastname: string, displayname: string, email: string, username: string, password: string, callback: Function): void;
      find(username: string, callback: Function): void;
      groups(username: string, callback: Function): void;
      remove(username: string, callback: Function): void;
    };
    groups: {
      active(group: string, callback: Function);
      addmember(username: string, group: string, callback: Function): void
      create(name: string, description: string, callback: Function): void;
      directmembers(group: string, callback: Function): void
      find(group: string, callback: Function): void;
      nestedmembers(group: string, callback: Function): void
      remove(group: string, callback: Function): void;
      removemember(username: string, group: string, callback: Function): void
    };
    session: {
      authenticate(token: string, remote_addr: string, callback: Function): void;
      create(username: string, password: string, remote_addr: string, callback: Function): void;
      find(token: string, callback: Function): void;
      destroy(token: string, callback: Function): void;
    };
  }
}
