package com.needyou.web.ai;

public final class AiPrompts {
    private AiPrompts() {}

    public static String jobParsingSystem(String language) {
        return switch (language) {
            case "FR" -> "Tu es un parser RH strict. Retourne uniquement un JSON valide en francais.";
            case "EN" -> "You are a strict HR parser. Return valid JSON only in English.";
            default -> "أنت محلل توظيف صارم. أعد JSON صالح فقط باللغة العربية.";
        };
    }

    public static String jobParsingUser(String jobDescription, String language) {
        return "Language=" + language + ". Extract job data and return EXACT JSON schema: " +
            "{\"keywords\":[string],\"requirements\":[string],\"seniority\":string,\"job_title\":string}. " +
            "Job description: " + jobDescription;
    }

    public static String cvSystem(String language) {
        return switch (language) {
            case "FR" -> "Tu es un expert CV ATS. Retourne uniquement un JSON valide.";
            case "EN" -> "You are an ATS CV expert. Return valid JSON only.";
            default -> "أنت خبير سيرة ذاتية ATS. أعد JSON صالح فقط.";
        };
    }

    public static String cvUser(String profileJson, String jobJson, String language) {
        String schema = "{\"full_name\":string,\"title\":string,\"summary\":string,\"skills\":[string],\"experience\":[{\"role\":string,\"company\":string,\"impact\":string}],\"education\":[{\"degree\":string,\"school\":string}],\"keywords_used\":[string],\"language\":string}";
        return "Language=" + language + ". Build ATS-tailored CV JSON with EXACT schema: " + schema + ". Profile=" + profileJson + " Job=" + jobJson;
    }

    public static String letterSystem(String language) {
        return switch (language) {
            case "FR" -> "Redige des lettres de motivation professionnelles concises.";
            case "EN" -> "Write concise, professional cover letters.";
            default -> "اكتب رسالة تحفيزية احترافية ومختصرة.";
        };
    }

    public static String letterUser(String profileJson, String jobJson, String language) {
        return "Language=" + language + ". Write a cover letter (120-180 words) based on profile=" + profileJson + " and job=" + jobJson;
    }

    public static String scoreSystem(String language) {
        return switch (language) {
            case "FR" -> "Tu es un assistant ATS. Retourne un JSON valide en francais.";
            case "EN" -> "You are an ATS scoring assistant. Return valid JSON in English.";
            default -> "أنت مساعد تقييم ATS. أعد JSON صالح بالعربية.";
        };
    }

    public static String scoreUser(String cvJson, String jobJson, String language) {
        return "Language=" + language + ". Compare CV and job, return EXACT JSON schema: {\"score\":number,\"gaps\":[string],\"recommendations\":[string],\"missing_keywords\":[string]}. CV=" + cvJson + " Job=" + jobJson;
    }
}
