package tribute_sjm_backend.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tribute_sjm_backend.backend.models.CondolenceEntity;

public interface CondolenceRepository extends JpaRepository<CondolenceEntity, Long> {
}
