export declare type Icon = {
  name: string
  type:
    | 'antdesign'
    | 'entypo'
    | 'evilicon'
    | 'feather'
    | 'font-awesome'
    | 'font-awesome-5'
    | 'fontisto'
    | 'foundation'
    | 'ionicon'
    | 'material'
    | 'material-community'
    | 'octicon'
    | 'simple-line-icon'
    | 'zocial'
  size?: number
  color?: string
}

export declare type Screens = {
  name: string
  component: React.FC<any>
  options?: {
    icon?: Icon
  }
}[]
