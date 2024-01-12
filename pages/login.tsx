import Image from "next/image";
import { Inter } from "next/font/google";
import { LoginForm } from "@sikka/hawa";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  return (
    <div className="flex flex-col w-full h-screen p-4 bg-blue-300 md:bg-red-200">
      <div className="flex-flex-col w-full max-w-md">
        <LoginForm
          // currentColorMode={resolvedTheme}
          // currentLanguage={defaultLang}
        //   handleColorMode={(e) => {
        //     console.log(e);
        //     //   setTheme(e);
        //   }}
          // handleLanguage={(e) => {
          //   setDefaultLang(defaultLang === "ar" ? "en" : "ar");
          //   router.push({ pathname, query }, asPath, {
          //     locale: defaultLang === "ar" ? "en" : "ar",
          //   });
          // }}
          // direction={lang === "ar" ? "rtl" : "ltr"}
          // showError={errorSignIn}
          // errorText={t(`common:${errorSignIn?.response?.data?.slug}`)}
          // errorText={errorSignIn?.response?.data?.slug}
          // handleForgotPassword={() => router.push("forgot")}
          // handleRouteToLogin={() => router.push("register")}
          // withoutLogin={!settings.allowSignup}
          // isLoading={loadSignIn}
          loginType={"email"}
          // handleLogin={(e) => handleSignIn(e)}
          // googleLoginText={t("google-sign-in")}
          logosOnly={true}
          viaGithub={false}
          viaGoogle={true}
          // handleGoogleLogin={handleSignInWithGoogle}
          viaTwitter={false}
          // texts={{
          //   createAccount: t("create-account"),
          //   forgotPasswordText: t("forgot-password"),
          //   newUserText: t("dont-have-account"),
          //   loginText: t("continue"),
          //   registerText: t("sign-up"),
          //   emailInvalidText: "Email is invalid",
          //   emailPlaceholder: "user@sikka.io",
          //   emailRequiredText: t("email-required"),
          //   emailLabel: t("email"),
          //   passwordLabel: t("password"),
          //   passwordPlaceholder: t("password-placeholder"),
          //   passwordRequiredText: t("password-required"),
          //   phoneRequiredText: "",
          //   loginViaGoogleLabel: t("auth:continue-with-google"),
          // }}
        />
      </div>
    </div>
  );
}
