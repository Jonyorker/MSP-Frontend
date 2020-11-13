import User from './UserClass'

export class UserDataTransferObject
{
    static createDomainObject(dto) {
        let data = {
            token: dto.token_type,
        };

        return new User(data);
    }

    static createDataTransferObject(user) {
        return {
            email: user.email,
            password: user.password
        };
    }
}