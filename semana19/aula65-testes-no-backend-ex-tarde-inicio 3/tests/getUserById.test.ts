import { UserDatabase } from "../src/data/UserDatabase"
import { UserBusiness } from "../src/business/UserBusiness"
import { User, stringToUserRole, UserRole } from "../src/model/User"


describe("Testing UserBusiness.getUserById", ()=>{

    let userDatabase ={}
    let hashGenerator = {}
    let idGenerator = {}
    let tokenGenerator = {}

    test("testing code Error is correct", async ()=>{
        expect.assertions(2);
    try {
      const getUserById = jest.fn();
      userDatabase = { getUserById };

      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );

      await userBusiness.getUserById("invalid-id")
    } catch (err) {
      expect(err.errorCode).toBe(404);
      expect(err.message).toBe("User not found");
    }
    })

    test("testing", async ()=>{
      const getUserById = jest.fn(
        (id:string)=>{
          new User(
            "id",
            "Nilsera",
            "nilsera@gmail.com",
            "hash",
            stringToUserRole("ADMIN")
          )
        }
      )

      userDatabase = {getUserById}

      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      )

      const user = await userBusiness.getUserById("id")

      expect(getUserById).toHaveBeenCalledWith("id")
      expect(user).toEqual({
        id: "id",
        name: "Nilsera",
        email: "nilsera@gmail.com",
        role: UserRole.ADMIN,
      })
    })
})