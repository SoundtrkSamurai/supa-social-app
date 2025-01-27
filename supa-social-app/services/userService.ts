import { supabase } from "@/lib/supabase";

export const getUserData = async (userId: string) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select()
      .eq("id", userId)
      .single();

      if (error) {
        return { success: false, msg: (error as Error).message } as const;
      }

      return { success: true, data };
  } catch (error: unknown) {
    console.log("got error", error);
    
    return { success: false, msg: (error as Error).message } as const;
  }
};

