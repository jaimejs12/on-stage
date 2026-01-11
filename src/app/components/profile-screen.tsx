import { Calendar, MapPin, Users } from "lucide-react";

export function ProfileScreen() {
  const upcomingConcerts = [
    {
      id: "1",
      artist: "Billie Eilish",
      date: "18 Ene 2026",
      venue: "Santiago Bernabéu",
      city: "Madrid",
    },
    {
      id: "2",
      artist: "Bad Bunny",
      date: "28 Ene 2026",
      venue: "Palau Sant Jordi",
      city: "Barcelona",
    },
  ];

  const pastConcerts = [
    {
      id: "1",
      artist: "Taylor Swift",
      date: "5 Dic 2025",
      venue: "Santiago Bernabéu",
      city: "Madrid",
    },
    {
      id: "2",
      artist: "Lana Del Rey",
      date: "20 Nov 2025",
      venue: "WiZink Center",
      city: "Madrid",
    },
    {
      id: "3",
      artist: "The Weeknd",
      date: "12 Oct 2025",
      venue: "Palau Sant Jordi",
      city: "Barcelona",
    },
  ];

  const friends = [
    { id: "1", name: "Juan López", initials: "JL" },
    { id: "2", name: "María García", initials: "MG" },
    { id: "3", name: "Carlos Ruiz", initials: "CR" },
    { id: "4", name: "Ana López", initials: "AL" },
    { id: "5", name: "Sara Martín", initials: "SM" },
  ];

  return (
    <div className="pb-24 pt-6 px-4">
      {/* Profile Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-2xl text-background">TU</span>
          </div>
          <div>
            <h1 className="text-foreground mb-1">Tu Usuario</h1>
            <p className="text-muted-foreground text-sm">@tuusuario</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-card rounded-xl p-4 border border-border text-center">
            <div className="text-2xl text-primary mb-1">
              {upcomingConcerts.length}
            </div>
            <div className="text-xs text-muted-foreground">Próximos</div>
          </div>
          <div className="bg-card rounded-xl p-4 border border-border text-center">
            <div className="text-2xl text-accent mb-1">
              {pastConcerts.length}
            </div>
            <div className="text-xs text-muted-foreground">Asistidos</div>
          </div>
          <div className="bg-card rounded-xl p-4 border border-border text-center">
            <div className="text-2xl text-primary mb-1">{friends.length}</div>
            <div className="text-xs text-muted-foreground">Amigos</div>
          </div>
        </div>
      </div>

      {/* Próximos Conciertos */}
      <section className="mb-8">
        <h2 className="mb-4 text-foreground">Próximos conciertos</h2>
        <div className="space-y-3">
          {upcomingConcerts.map((concert) => (
            <div
              key={concert.id}
              className="bg-card rounded-xl p-4 border border-border hover:border-primary/50 transition-all"
            >
              <h3 className="text-foreground mb-2">{concert.artist}</h3>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{concert.date}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>
                    {concert.venue} · {concert.city}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Conciertos Pasados */}
      <section className="mb-8">
        <h2 className="mb-4 text-foreground">Conciertos pasados</h2>
        <div className="space-y-2">
          {pastConcerts.map((concert) => (
            <div
              key={concert.id}
              className="bg-card rounded-lg p-3 border border-border opacity-75 hover:opacity-100 transition-all"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-foreground text-sm mb-1">
                    {concert.artist}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {concert.date} · {concert.venue}
                  </p>
                </div>
                <div className="text-primary text-xl">✓</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Amigos */}
      <section className="mb-8">
        <h2 className="mb-4 text-foreground flex items-center gap-2">
          <Users className="w-5 h-5" />
          <span>Amigos</span>
        </h2>
        <div className="grid grid-cols-5 gap-3">
          {friends.map((friend) => (
            <div key={friend.id} className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-border flex items-center justify-center text-sm text-foreground mb-2 mx-auto hover:border-primary/50 transition-all cursor-pointer">
                {friend.initials}
              </div>
              <p className="text-xs text-muted-foreground truncate">
                {friend.name.split(" ")[0]}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
