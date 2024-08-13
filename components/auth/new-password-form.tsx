"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useFormState, useFormStatus } from "react-dom";
import LoadingSpinner from "../ui/loading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSearchParams } from "next/navigation";
import { newPassword } from "@/actions/new-password";

export function NewPasswordForm() {
  const [state, action] = useFormState(newPassword, undefined);

  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  function SubmitButton() {
    const { pending } = useFormStatus();

    return (
      <Button type="submit" className="w-full">
        {pending ? <LoadingSpinner /> : "Reset Password"}
      </Button>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Reset Password</CardTitle>
          <CardDescription>
            Don't fret! Just type in your email and we will send you a code to
            reset your password!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={action} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="******"
                required
              />
            </div>
            <Input type="hidden" name="token" id="token" value={token || ""} />
            <SubmitButton />
            {state?.error || state?.success}
          </form>

          <div className="mt-4 text-center text-sm">
            <Link href="/auth/login" className="underline">
              Back to login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
