import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function GET() {
  try {
    // Test avec service_role key
    const supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    );

    // Test 1: Connexion basique
    const { data: tables, error: tablesError } = await supabaseAdmin
      .from('contact_submissions')
      .select('*')
      .limit(1);

    if (tablesError) {
      return NextResponse.json({
        success: false,
        message: 'La table contact_submissions n\'existe pas encore dans Supabase',
        error: tablesError.message,
        hint: tablesError.hint,
        details: tablesError.details,
        instruction: 'Vous devez exécuter le script SQL "supabase-setup-contact-submissions.sql" dans votre dashboard Supabase (SQL Editor)'
      }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: 'Connexion Supabase OK - La table existe',
      rowCount: tables?.length || 0
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: 'Erreur de connexion',
      error: error.message
    }, { status: 500 });
  }
}
