declare namespace Api {
  /**
   * namespace Auth
   *
   * backend api module: "auth"
   */
  namespace Auth {
    interface LoginToken {
      accessToken: string;
      tokenType?: string;
      expiresIn?: number;
      refreshToken?: string;
      userInfo: UserInfo;
    }

    interface UserInfo {
      userId: string;
      username: string;
      realName?: string;
      phone?: string;
      email?: string;
      gender?: string;
      avatar?: string;
      userType?: string;
      tenantId?: string;
      roles: string[];
      permissions: string[];
      buttons?: string[];
    }
  }
}
