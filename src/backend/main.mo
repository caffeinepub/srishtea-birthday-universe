import Runtime "mo:core/Runtime";

actor {
  var visitCount = 0;
  var isFriendshipStamped = false;

  public shared ({ caller }) func incrementVisitCount() : async Nat {
    visitCount += 1;
    visitCount;
  };

  public shared ({ caller }) func getVisitCount() : async Nat {
    visitCount;
  };

  public shared ({ caller }) func stampFriendshipPassport() : async () {
    if (isFriendshipStamped) {
      Runtime.trap("Friendship passport already stamped!");
    } else {
      isFriendshipStamped := true;
    };
  };

  public shared ({ caller }) func isFriendshipPassportStamped() : async Bool {
    isFriendshipStamped;
  };
};
