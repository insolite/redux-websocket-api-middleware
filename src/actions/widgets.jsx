export const SAVE_WIDGET_DATA = 'SAVE_WIDGET_DATA';
export function saveWidgetData(data, widgetId) {
    return {
        type: SAVE_WIDGET_DATA,
        payload: {
            data,
            widgetId
        },
    }
}

export const CLEAR_WIDGET_DATA = 'CLEAR_WIDGET_DATA';
export function clearWidgetData(widgetId) {
    return {
        type: SAVE_WIDGET_DATA,
        payload: {
            widgetId
        },
    }
}
