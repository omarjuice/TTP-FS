interface DBSchema {
    create: string
    drop: string
}


declare namespace UserSchema {
    interface I {
        firstName: string,
        lastName: string,
        email: string,
    }
    interface Create extends I {
        password: string
    }
    interface DB extends I {
        id: number
        createdAt: Date
        password?: string
    }
}
