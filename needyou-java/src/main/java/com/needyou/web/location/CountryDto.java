package com.needyou.web.location;

import java.util.List;

public record CountryDto(String code, String nameAr, String nameEn, String nameFr, List<StateDto> states) {}
