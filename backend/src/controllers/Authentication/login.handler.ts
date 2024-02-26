declare module "disco-oauth" {
    export default class OAuthClient {
      constructor(clientId: string, clientSecret: string);
      setScopes(scopes: string[]): void;
      setRedirect(redirectUrl: string): void;
  
      getAccess(code: any): void;
      getUser(user: any): any;
    }
  }