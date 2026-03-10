package com.needyou.web.location;

import java.util.List;

public record StateDto(String code, String nameAr, String nameEn, String nameFr, List<String> cities) {}
