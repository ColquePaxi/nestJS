enum Gender {
    MALE = 'male',
    FEMALE = 'female',
}

export class UserDto {
 
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly gender: Gender;
    
}