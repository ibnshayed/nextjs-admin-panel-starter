import { setCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";
import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          const userData = jwtDecode(data.result.accessToken);

          localStorage.setItem("user", JSON.stringify(userData));

					setCookie("accessToken", data.result.accessToken);
          setCookie("refreshToken", data.result.refreshToken);
					

          dispatch(
            userLoggedIn({
              accessToken: data.result.accessToken,
              refreshToken: data.result.refreshToken,
              user: userData,
            })
          );
        } catch (error) {}
      },
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
