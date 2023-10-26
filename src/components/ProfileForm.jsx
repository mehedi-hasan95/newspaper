const ProfileForm = (props) => {
    console.log(props.data);
    return (
        <div className="grid items-center h-[80vh] mx-4">
            <div className="bg-white px-5 py-5">
                <h2 className="text-2xl font-bold">Profile</h2>
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="fname">First Name</label>
                            <input
                                type="text"
                                name="fname"
                                id="fname"
                                className="border-2 border-black outline-none px-3 py-2 w-full rounded-md"
                                defaultValue={props.data.firstName}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="lname">Last Name</label>
                            <input
                                type="text"
                                name="lname"
                                id="lname"
                                className="border-2 border-black outline-none px-3 py-2 w-full rounded-md"
                                defaultValue={props.data.lastName}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="mobile">Mobile Number</label>
                            <input
                                type="text"
                                name="mobile"
                                id="mobile"
                                className="border-2 border-black outline-none px-3 py-2 w-full rounded-md"
                                defaultValue={props.data.mobile}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email">Your Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="border-2 border-black outline-none px-3 py-2 w-full rounded-md"
                                defaultValue={props.data.email}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="password">Your Password</label>
                            <input
                                type="text"
                                name="password"
                                id="password"
                                className="border-2 border-black outline-none px-3 py-2 w-full rounded-md"
                                defaultValue={props.data.password}
                            />
                        </div>
                    </div>
                    <input
                        type="submit"
                        value="Update"
                        className="font-semibold px-5 py-2 bg-rose-600 text-white cursor-pointer mt-5 rounded-md"
                    />
                </form>
            </div>
        </div>
    );
};

export default ProfileForm;
