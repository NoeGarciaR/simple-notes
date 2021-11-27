/**
 * @interface NavidationInterface
 * @exports
 * @memberof NavBarComponent
 */
export interface NavigationInterface {
  /**
   * @memberof NavigationInterface
   * @property name
   * @type string
   * @required
   */
  name : string,
  /**
   * @memberof NavigationInterface
   * @property router
   * @type string
   * @required
   * @description router or navigation data
   */
  router: string
}
