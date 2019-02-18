package com.techwizzle.site.repositories;

import com.techwizzle.site.model.Benchmark;
import org.springframework.data.repository.CrudRepository;

public interface BenchmarkRepository extends CrudRepository<Benchmark, Long> {

}