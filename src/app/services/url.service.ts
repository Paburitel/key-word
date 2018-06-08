import { Injectable } from '@angular/core';

@Injectable()
export class UrlService {
  private _basePass = 'http://localhost:3000';
  private _groupsUrl = {
    getCommonGroups: '/v0/groups',
    getUserGroups: '/v0/user/groups',
    _getUserGroup: '/v0/user/groups/',
    getUserGroup(id: string) {
      const _id = id || '';
      return `${this._getUserGroup}${_id}`;
    },
    postGroup: '/v0/user/groups',
    _putUserGroup: '/v0/user/groups/',
    putUserGroup(id: string) {
      const _id = id || '';
      return `${this._putUserGroup}${_id}`;
    },
    _delUserGroup: '/v0/user/groups/',
    delUserGroup(id: string) {
      const _id = id || '';
      return `${this._delUserGroup}${_id}`;
    },
  };
  constructor() { }
  get basePass() {
    return this._basePass;
  }
  get groupsUrl() {
    return this._groupsUrl;
  }
}
