
import axios from "../utils/customAxios";
import {
    schemaAccountJoi,
    schemaVertifyJoi,
    schemaChangePassJoi
} from "../models/authSchema";

const loginSvc = async (dataLogin) => {
    const { error } = schemaVertifyJoi.validate(dataLogin, { abortEarly: false });
    if (error) {
        throw {
            success: false,
            errors: error.details
        }
    }
    try {
        const dataUser = await axios.post("/new/login", dataLogin);
        return dataUser;
    } catch (error) {
        return error;
    }
}

const registerSvc = async (dataRegister) => {
    const { error } = schemaAccountJoi.validate(dataRegister, { abortEarly: false });
    if (error) {
        throw {
            success: false,
            errors: error.details
        }
    }
    try {
        const dataUser = await axios.post("/new/register", dataRegister);
        return dataUser;
    } catch (error) {
        console.log(error);
        return error;
    }
}

const changePassworSvc = async (dataChange) => {
    const { error } = schemaChangePassJoi.validate(dataChange);
    if (error) {
        throw {
            success: false,
            // errors: error.details[0].message
        }
    }
    try {
        const dataUser = await axios.put("/new/change-password", dataChange);
        return dataUser;
    } catch (error) {
        return error;
    }
}

export {
    loginSvc,
    registerSvc,
    changePassworSvc
}