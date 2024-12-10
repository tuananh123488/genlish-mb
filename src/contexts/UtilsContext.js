import { createContext } from "react";
import { Alert } from "react-native";
export const utilsContext = createContext()
export const notifyType = {
    SUCCESS: 'Thành công',
    FAIL: 'Thất bại',
    WARNING: 'Cảnh báo',
    LOADING: 'Đang tải..',
    NONE: 'none'
}

const UtilsProvider = ({ children }) => {

    const notify = (title, message, onCancel, onOK) => {
        Alert.alert(
            title,
            message,
            [
                {
                    text: 'Cancel',
                    onPress: onCancel,
                    style: 'cancel'
                },
                {
                    text: 'OK',
                    onPress: onOK
                }
            ],
            { cancelable: false }
        );
    };

    const data = {

    }

    const handler = {
        notify
    }

    return (
        <utilsContext.Provider value={{ utilsData: data, utilsHandler: handler }}>
            {children}
        </utilsContext.Provider>
    )
}

export default UtilsProvider