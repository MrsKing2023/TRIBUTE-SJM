package tribute_sjm_backend.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tribute_sjm_backend.backend.models.GuestBookEntity;

public interface GuestBookRepository extends JpaRepository<GuestBookEntity, Long> {
}
