export const SET_NOTIFICATION = 'SET_NOTIFICATION';
export const SHOW_NOTIFICATION_LIST = 'SHOW_NOTIFICATION_LIST';

export interface iNotification {
  message: string;
  type: 'success' | 'danger' | 'warning';
}

export interface iNotificationList {
  items: iNotification[]
}

//export interface iNotificationList extends Array<iNotification>{}


interface SetNotificationAction {
  type: typeof SET_NOTIFICATION;
  payload: iNotification;
}

interface SetNotificationListAction {
  type: typeof SHOW_NOTIFICATION_LIST;
  payload: iNotificationList;
}


export type NotificationAction = SetNotificationAction;
export type NotificationListAction = SetNotificationListAction;