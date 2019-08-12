package com.dgomez.developer.heroines.data

import com.dgomez.developer.heroines.model.Heroin
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface HeroinesRepository: JpaRepository<Heroin, String>